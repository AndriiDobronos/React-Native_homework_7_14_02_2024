import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet,ScrollView} from 'react-native';
import {mockItemData1,mockItemData2,mockItemData3} from "@/constants/mockItemData";
import {ProductCard} from "./ProductCard";
import ModalWindow from "./Modal";

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([
        { id: '1', name: 'Item 1' , mockItemData:mockItemData1},
        { id: '2', name: 'Item 2', mockItemData:mockItemData2},
        { id: '3', name: 'Item 3', mockItemData:mockItemData3},
    ]);
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = () => {
        const filtered = data.filter(item => item.name.includes(searchQuery));
        setFilteredData(filtered);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Введите текст для поиска"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <ModalWindow />
                <Button title="&#x1F50D;" onPress={handleSearch} />
            </View>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ScrollView>
                        <View style={styles.itemContainer}>
                            <ProductCard mockItemData={item.mockItemData}/>
                        </View>
                    </ScrollView>

                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:4,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        paddingHorizontal:8,
    },
    input: {
        flex: 1,
        marginRight: 8,
        borderWidth: 1,
        padding: 8,
    },
    itemContainer: {

    },
});

export {SearchComponent};
