import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function city({ route, navigation }) {
    const { title } = route.params;
    const [location, setlocation] = React.useState()
    const [info, setinfo] = React.useState()
    const [data, setdata] = React.useState([])

    const addlocation = () => {
        let obj = {
            info: info,
            location: location
        }
        setdata([...data , obj])
    }
    const renderItem = ({ item }) => {
        console.log(JSON.stringify(item.id))
        return (
            <TouchableOpacity  style={{ padding:'4%' , borderBottomWidth:1, borderBottomColor:"#1A75D2" , marginTop:"2%"}}>
                <Text style={{ fontWeight:'bold' , fontSize:18 }}>{item.location}</Text>
                <Text>{item.info}</Text>
            </TouchableOpacity>)
    }
    return (
        <View>
            <View style={{ flexDirection: "row", padding: "3%", justifyContent: "space-between", backgroundColor: "#1B76D3" }}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Ionicons name='chevron-back-outline' size={18} />
                    <Text style={{color:"#fff"}}>Cities</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{color:'#fff' , marginRight:'3%'}}>{title}</Text>
                </View>
                <View>

                </View>

            </View>
            <View style={{ height: "50%" }}>
                {data ? (
                    <View>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}

                        />
                    </View>

                ) :
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text>No location for this city</Text>

                    </View>
                }

            </View>
            <View style={{ height: "40%" }}>
                <TextInput
                    style={styles.in}
                    onChangeText={(loc) => setlocation(loc)}
                    placeholder='Location Name'
                />
                <TextInput
                    style={styles.in}
                    onChangeText={(info) => setinfo(info)}
                    placeholder='Location Info'
                />
                <TouchableOpacity onPress={() => addlocation()} style={styles.btn}>
                    <Text style={{ textAlign: "center", color: "#fff" }}>Add Location</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    in: {
        marginTop: '4%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#1B76D3",
        width: "100%"

    },
    btn: {
        marginTop: "4%",
        padding: '4%',
        backgroundColor: "#1B76D3"
    },
})