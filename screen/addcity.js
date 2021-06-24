import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function addcity() {
    const [cityname, setcityname] = useState()
    const [countryname, setcountryname] = useState()


    const addCityftn = async () => {
        
        try {
            let countries = await AsyncStorage.getItem('Citydata');
            countries = JSON.parse(countries)

            console.log("check", countries)
            if (countries != null) {
                console.log("hello")
                len = countries.length
                console.log(countries)
                var objs = 
                    {
                        id:len,
                        city: cityname,
                        countryname: countryname
                    }
                
                countries.push(objs);

                await AsyncStorage.setItem(
                    'Citydata',
                    JSON.stringify(countries)

                );
            }
            else {
                console.log(countries)
                var obj = [
                    {
                        id:0,
                        city: cityname,
                        countryname: countryname
                    }
                ]
                await AsyncStorage.setItem(
                    'Citydata', JSON.stringify(obj)
                );
            }


        } catch (error) {
            console.log(error)
        }

    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cities</Text>
            <View style={{ marginLeft: '6%', marginRight: "6%", marginTop: '3%' }}>
                <TextInput
                    style={styles.in}
                    onChangeText={(city) => setcityname(city)}
                    placeholder='Enter the city Name'
                />
                <TextInput
                    style={styles.in}
                    onChangeText={(country) => setcountryname(country)}
                    placeholder='Enter the Country Name'
                />
                <TouchableOpacity onPress={() => addCityftn()} style={styles.btn}>
                    <Text style={{ textAlign: "center", color: "#fff" }}>Add City</Text>

                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67A912',
        justifyContent: "center",

    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    btn: {
        marginTop: "4%",
        padding: '4%',
        backgroundColor: "#666666"
    },
    in: {
        marginTop: '4%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#fff"

    }

})