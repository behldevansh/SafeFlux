import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import Video from 'react-native-video';
import axios from 'axios';
import urlParser from 'js-video-url-parser';
import placeholder from '../assets/nsfw.png';

const { width, height } = Dimensions.get('window');

export const Home = () => {
    const [originalUrl, setUrl] = useState("");
    const [error, setError] = useState(false);
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoId, setVideoId] = useState();
    const [timeSlot, setTimeSlot] = useState({
        startFrom: 0,
        endsUpto: 0,
        videoLength: 0,
    });
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [urlAxios, setUrlAxios] = useState("");

    const handleLinkChange = (text) => {
        setUrl(text);
        setError(false);
        setShowPlaceholder(!text);

        const provider = urlParser.parse(text)?.provider;
        const idVal = urlParser.parse(text)?.id;

        if (!provider || !idVal) {
            Alert.alert("Error", "Wrong Input");
            setUrl("");
            setShowPlaceholder(true);
            return;
        }

        let axiosUrl = "";
        switch (provider) {
            case "youtube":
                axiosUrl = `https://record-timestamps.onrender.com/ytb/timeframes/${idVal}`;
                break;
            case "dailymotion":
                axiosUrl = `https://record-timestamps.onrender.com/dmr/timeframes/${idVal}`;
                break;
            case "vimeo":
                axiosUrl = `https://record-timestamps.onrender.com/vim/timeframes/${idVal}`;
                break;
            case "facebook":
                axiosUrl = `https://record-timestamps.onrender.com/fb/timeframes/${idVal}`;
                break;
            case "soundcloud":
                axiosUrl = `https://record-timestamps.onrender.com/sc/timeframes/${idVal}`;
                break;
            case "twitch":
                axiosUrl = `https://record-timestamps.onrender.com/twit/timeframes/${idVal}`;
                break;
            default:
                Alert.alert("Error", "Provider not supported");
                setUrl("");
                setShowPlaceholder(true);
                return;
        }

        setVideoId(idVal);
        setUrlAxios(axiosUrl);

        axios.get(axiosUrl)
            .then((res) => {
                const times = res.data;
                if (times.length === 0) {
                    Alert.alert("Error", "No data found");
                } else {
                    let startTimes = times.map((entry) => entry.startFrom).sort((a, b) => a - b);
                    let endTimes = times.map((entry) => entry.endsUpto).sort((a, b) => a - b);
                    setTimeSlot({
                        ...timeSlot,
                        startFrom: startTimes[0],
                        endsUpto: endTimes[endTimes.length - 1],
                        videoLength: videoRef.current?.getDuration() || 0,
                    });
                }
            })
            .catch((err) => {
                console.error("Error fetching timeframes:", err);
                Alert.alert("Error", "Failed to fetch timeframes");
            });
    };

    const handlePlay = () => {
        if (!originalUrl) {
            setError(true);
            return;
        }

        const videoLength = videoRef.current?.getDuration() || 0;
        const startFrom = videoRef.current?.getCurrentTime() || 0;
        setCurrentTime(startFrom);
        setTimeSlot({ ...timeSlot, startFrom, videoLength });
        Alert.alert("Start Time", `${startFrom}`);
    };

    const handlePause = () => {
        if (!originalUrl) {
            setError(true);
            return;
        }

        const endsUpto = videoRef.current?.getCurrentTime() || 0;
        setCurrentTime(endsUpto);
        setTimeSlot({ ...timeSlot, endsUpto });
        Alert.alert("End Time", `${endsUpto}`);
    };

    const dataInput = () => {
        if (!originalUrl) {
            setError(true);
            return;
        }

        const provider = urlParser.parse(originalUrl).provider;
        if (timeSlot.startFrom > timeSlot.endsUpto || timeSlot.endsUpto < timeSlot.startFrom) {
            Alert.alert("Error", "Time is not correctly set");
            setUrl("");
            return;
        }

        const data = { ...timeSlot, videoId, originalUrl };
        const urlMap = {
            "youtube": "https://record-timestamps.onrender.com/ytb/inserttimeframes",
            "dailymotion": "https://record-timestamps.onrender.com/dmr/inserttimeframes",
            "vimeo": "https://record-timestamps.onrender.com/vim/inserttimeframes"
        };

        if (provider in urlMap) {
            const validLength = {
                "youtube": 11,
                "dailymotion": 7,
                "vimeo": 9
            }[provider];

            if (data.videoId.length === validLength) {
                axios.post(urlMap[provider], data)
                    .then((res) => {
                        Alert.alert("Success", res.data.message);
                    })
                    .catch((err) => {
                        console.error("Error submitting data:", err);
                        Alert.alert("Error", "Failed to submit data");
                    });
            } else {
                Alert.alert("Error", "Invalid Input");
            }
        } else {
            Alert.alert("Error", "Provider not supported");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.alignCenter}>
                <TextInput
                    style={[styles.imgUrlText, error && styles.errorInput]}
                    placeholder={error ? "Error: Enter Video URL of above format" : "Enter Video URL of above format"}
                    onChangeText={handleLinkChange}
                />
            </View>
            <View style={styles.playerWrapper}>
                {showPlaceholder ? (
                    <Image source={placeholder} style={styles.placeholderImg} />
                ) : (
                    <Video
                        ref={videoRef}
                        source={{ uri: originalUrl }}
                        controls={true}
                        resizeMode="contain"
                        style={styles.reactPlayer}
                        onLoad={(data) => {
                            setTimeSlot({ ...timeSlot, videoLength: data.duration });
                        }}
                    />
                )}
            </View>
            <View style={styles.timestamps}>
                <Button title="Start" onPress={handlePlay} color="#ff4d4d" />
                <Button title="End" onPress={handlePause} color="#ff4d4d" />
                <Button title="Submit" onPress={dataInput} color="#ff4d4d" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C1C1E",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    alignCenter: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    imgUrlText: {
        width: '70%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 4,
        fontSize: 16,
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 10,
    },
    errorInput: {
        backgroundColor: 'red',
        color: 'white',
        borderColor: 'red',
    },
    playerWrapper: {
        width: width * 0.9,
        height: height * 0.5,
        backgroundColor: '#ccc',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    reactPlayer: {
        width: '100%',
        height: '100%',
    },
    timestamps: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
    },
});

export default Home;
