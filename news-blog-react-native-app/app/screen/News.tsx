import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import { mainStyles } from "../styles/style";
import Item from "../components/Item";
import axios from "axios";

const News = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const getArticles = () => {
    let config = {
      headers: {
        "data-type": "json",
        "Content-type": "application/json",
      },
    };

    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2023-08-21&sortBy=popularity&apiKey=367b8ab0ea684d2a827532436d3ab1ed",
        config
      )
      .then((res: any) => {
        const data = res.data;
        setData(data.articles);
        setIsLoading(false);
      });
  };

  const Loading = () => {
    return (
      <View
        style={[
          mainStyles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  };

  const Articles = () => {
    return (
      <SafeAreaView
        style={[mainStyles.container, { backgroundColor: "#bdc3c7" }]}
      >
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getArticles} />
          }
          data={data}
          numColumns={2}
          renderItem={({ item, index }) => (
            <Item
              title={item.title}
              urlToImage={item.urlToImage}
              content={item.content}
              description={item.description}
              navigation={navigation}
              index={index}
            />
          )}
          keyExtractor={(item) => item.title}
          style={{ marginTop: 10 }}
        />
      </SafeAreaView>
    );
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Articles />;
};

export default News;
