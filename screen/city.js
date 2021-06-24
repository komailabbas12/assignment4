import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function city({navigation}) {
    const [cities, setcities] = useState([])

    useEffect(async () => {
        let countries = await AsyncStorage.getItem('Citydata')
        countries = JSON.parse(countries)
        console.log(countries)
        setcities(countries)
        console.log(cities)

    }, [])
    const renderItem = ({ item }) => {
        console.log(JSON.stringify(item.id))
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('location' , {
                title:item.city

            })} style={{ padding:'4%' , borderBottomWidth:1, borderBottomColor:"#1A75D2" , marginTop:"2%"}}>
                <Text style={{ fontWeight:'bold' , fontSize:18 }}>{item.city}</Text>
                <Text>{item.countryname}</Text>
            </TouchableOpacity>)
    }
    return (

        <View style={{ flex: 1 }}>
            {console.log("sssssssssss", cities)}
            <View style={{ backgroundColor: '#1A75D2', padding: "4%" }}>
                <Text style={{ textAlign: "center", color: "#fff" , fontSize:18, fontWeight:'bold' }}>Cities</Text>

            </View>
            {cities ? (

                <FlatList
                    data={cities}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}

                />


            ) : null}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67A912',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    btn: {
        width: "80%",
        padding: '4%',
        backgroundColor: "#666666"
    },
    in: {
        width: "80%",
        borderRadius: 8,

    }

})