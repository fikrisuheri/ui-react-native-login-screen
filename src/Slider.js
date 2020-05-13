import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';


const Slider = ({ onDone }) => {

    const _renderItem = ({ item }) => {
        return (
            <View
                style={[
                    styles.slide,
                    {
                        backgroundColor: item.bg,
                    },
                ]}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    const _keyExtractor = (item) => item.title;

    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };

    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
            </View>
        );
    };

    return (
        <AppIntroSlider
            keyExtractor={_keyExtractor}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderItem={_renderItem}
            data={data}
            activeDotStyle={{ backgroundColor: 'black' }}
            onDone={onDone}
        />
    )
}


const data = [
    {
        title: 'Fresh Food',
        text: 'Lorem Ipsum is simply dummy text of the \n printing and typesetting industry.',
        image: require('./img1.png'),
        bg: '#fff',
    },
    {
        title: 'Fast Delivery',
        text: 'Lorem Ipsum is simply dummy text of the \n printing and typesetting industry.',
        image: require('./img2.png'),
        bg: '#fff',
    },
    {
        title: 'Easy Payment',
        text: "Lorem Ipsum is simply dummy text of the \n printing and typesetting industry.",
        image: require('./img3.png'),
        bg: '#fff',
    },
];

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        paddingTop:120
    },
    image: {
        resizeMode: 'contain',
        width: 280,
        height: 280,
    },
    text: {
        color: 'rgba(0, 0, 0, 0.8)',
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        marginBottom:20,
        color: 'black',
        textAlign: 'center',
        fontWeight:'bold'
    },
    buttonCircle: {
        width: 66,
        height: 44,
        backgroundColor: '#1e88e5',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Slider

