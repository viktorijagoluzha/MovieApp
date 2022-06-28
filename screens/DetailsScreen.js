import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Card } from 'react-native-paper';


const DetailsScreen = ({ route }) => {
    const { show } = route.params;
    const [liked, setLiked] = useState(false)



    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    };


    const renderItem = ({ item }) => {
        return (

            <Card style={styles.card}>
                <TouchableOpacity
                    onPress={() => {
                        console.log("dojdovme")
                    }}
                >
                    <View >
                        <Text style={styles.bannerInfoCard}>{item.popularity}</Text>
                        <Text style={styles.bannerOverview}>{item.vote_average}</Text>
                        <Text style={styles.bannerOverview}>{item.first_air_date}</Text>

                        <Image
                            style={styles.banner}
                            source={{
                                uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                            }}

                        />
                    </View>
                </TouchableOpacity>
            </Card>

        )
    }

    return (
        <View>

            <Image
                style={styles.banner}
                source={{
                    uri: `http://image.tmdb.org/t/p/w780${show.poster_path}`,
                }}>
            </Image>

            <TouchableOpacity
                onPress={() => setLiked((prevState) => !prevState)}>
                <Text>{liked ? "❤️" : "♡"}</Text>
            </TouchableOpacity>

            <Text>{show.name} </Text>
            <Text>{show.overview}</Text>
            <Text>{show.vote_average}</Text>
            <Text>{show.first_air_date}</Text>
            <Rating
                showRating
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10, width: 100, height: 100, }}
            />

            <FlatList
                horizontal={true}
                data={show}
                showsHorizontalScrollIndicator={true}
                renderItem={renderItem}
            />


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    card: {
        flex: 1,
        height: 200,
        margin: 5,
        alignSelf: 'center',
        overflow: 'hidden',
        borderWidth: 5,
    },
    banner: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,

    },
    bannerOverview: {
        color: 'grey',
    },
    bannerInfoCard: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 50,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(21,21,21,0.5)',
    },


});
export default DetailsScreen;