import React, { useState, useEffect } from 'react';
import { ROUTE_NAMES } from '../App';
import { Card } from 'react-native-paper';
import Loading from '../components/Loading';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,

} from 'react-native';
import { fetchShows } from '../services/ApiService';
import { Icon } from '@rneui/themed';


const PopularShowsScreen = ({ navigation }) => {

    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [searchNow, setSearchNow] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetchShows(search, shows).then((data) => {
            setShows(data);
            setLoading(false);
        });
    }, [searchNow]);

    const renderItem = ({ item }) => {
        return (
            <Card style={styles.card}>
                <Text style={styles.bannerTitle}>
                    {item.title}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTE_NAMES.DetailsScreen, {
                            show: item
                        })
                    }}
                >

                    <Image
                        source={{
                            uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                        }}
                        style={{ width: 200, height: 200 }}
                    />

                </TouchableOpacity>
            </Card>
        );
    }

    return loading ? (<Loading />) : (
        <ScrollView showsVerticalScrollIndicator>
            <View style={{
                flex: 1,
            }}>
                <View style={{ flex: 1 / 5 }}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={'search show'}
                            value={search}
                            defaultValue={search}
                            onChangeText={(text) => setSearch(text)}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                console.log('pressed');
                                setSearchNow(!searchNow);
                            }}>
                            <Icon
                                name={search ? 'search' : 'refresh'}
                                type='evilicon'
                                size={20}
                                color="black"
                                style={{ alignSelf: 'center', marginHorizontal: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <View>
                        <View style={styles.bannerInfoCard}>
                            <Text style={styles.bannerTitle}>
                                {shows.original_title}
                            </Text>
                            <Text style={styles.bannerOverview}>
                                {shows.overview}
                            </Text>
                            <View>

                                <FlatList
                                    data={shows}
                                    numColumns={2}
                                    renderItem={renderItem}
                                />

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

    )

}
export default PopularShowsScreen;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 10,


    },
    bannerInfoCard: {
        borderRadius: 20
    },
    bannerTitle: {
        color: 'white',
        fontSize: 10,
        letterSpacing: 1.2,
    },
    card: {
        flex: 1,
        height: 200,
        margin: 5,
        alignSelf: 'center',
        overflow: 'hidden',
        borderWidth: 5,
    },


})