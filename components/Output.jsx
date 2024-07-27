import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import urlParser from "js-video-url-parser";
import Video from "react-native-video";
import Thumbnail from "./Thumbnail";

const Output = () => {
  const [originalUrl, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [shouldPlay, setShouldPlay] = useState(false);
  const [db, setDB] = useState([]);
  const [pgNo, setPgNo] = useState(1);

  useEffect(() => {
    const dbURL = "https://record-timestamps.onrender.com/ytb/timeframes";
    axios
      .get(dbURL)
      .then((res) => {
        const dbArr = res.data.response;
        const reversedDB = dbArr.reverse();
        const dataDB = Array.from(new Set(reversedDB.map((obj) => obj.videoId)));
        setDB(dataDB);
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching database.");
      });
  }, []);

  const handleLinkChange = (text) => {
    setShouldPlay(false);
    setUrl(text);
    const parsedUrl = urlParser.parse(text);
    if (!parsedUrl) {
      setUrl("");
      alert("Invalid URL");
      return;
    }

    const { provider, id } = parsedUrl;
    if (!id || provider !== "youtube") {
      setUrl("");
      alert("Invalid or unsupported URL");
      return;
    }

    setVideoId(id);
    setShouldPlay(true);
  };

  const handleHomeClick = (id) => {
    setVideoId(id);
    setUrl(`https://www.youtube.com/watch?v=${id}`);
    setShouldPlay(true);
  };

  const dbs = db.slice((pgNo - 1) * 12, pgNo * 12);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore our filtered and safe database</Text>
      <View style={styles.alignCenter}>
        <TextInput
          style={styles.input}
          placeholder="Enter URL of YouTube video you want to search"
          onChangeText={handleLinkChange}
          value={originalUrl}
        />
        <Button title="PLAY" onPress={() => setShouldPlay(true)} />
      </View>

      {shouldPlay && (
        <View style={styles.playerWrapper}>
          <Video
            source={{ uri: `https://www.youtube.com/watch?v=${videoId}` }}
            controls={true}
            style={styles.videoPlayer}
            onError={(e) => console.error("Player Error:", e)}
          />
        </View>
      )}

      <ScrollView contentContainerStyle={styles.dataList}>
        {dbs.map((id) => (
          <TouchableOpacity key={id} onPress={() => handleHomeClick(id)} style={styles.thumbnailContainer}>
            <Thumbnail vidId={id} title={`Video ${id}`} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        <Button
          title="-"
          onPress={() => setPgNo(pgNo === 1 ? 1 : pgNo - 1)}
        />
        <Text style={styles.pageNumber}>{pgNo}</Text>
        <Button
          title="+"
          onPress={() => setPgNo(pgNo + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
  heading: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  alignCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  input: {
    width: "70%",
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: "#fff",
    color: "#000",
  },
  playerWrapper: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
    marginBottom: 20,
  },
  videoPlayer: {
    width: "100%",
    height: "100%",
  },
  dataList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  thumbnailContainer: {
    margin: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  pageNumber: {
    fontSize: 20,
    color: "white",
    marginHorizontal: 20,
  },
});

export default Output;
