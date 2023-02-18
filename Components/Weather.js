import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import WeatherSearch from './WeatherSearch';
import { haze, rainy, snow, sunny } from '../images/backgroundImg/image';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
            name,
            main: { temp,humidity, temp_max,temp_min },
            sys:{sunrise,sunset,country},
            wind: { speed }
    } = weatherData;
    const [{ description }] = weather;

    
    useEffect(() => {
        setBackgroundImage(getBackgroundImg(description));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
           return haze;   
    }

    let textColor = backgroundImage !== sunny ? 'white' : 'black'
    
  
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <WeatherSearch fetchWeatherData={fetchWeatherData} />   

                <View style={{marginLeft:15}}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 30}}>{name},{country}</Text>
                    <Text style={{ ...styles.headerText, color: textColor,fontWeight:'bold', fontSize: 15}}>{new Date().toLocaleDateString()}</Text>
                    <Text style={{ ...styles.headerText, color: textColor,fontWeight:'bold', fontSize: 15}}>{new Date().toLocaleTimeString()}</Text>
                </View>
                <View style={{marginLeft:200,marginTop:-35}}>
                    <Text style={{ ...styles.headerText, color: textColor,fontWeight:'bold', fontSize: 30}}>{temp} °C</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold',fontSize: 20}}>{description}</Text>
                   
                </View>

                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>High</Text>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>{temp_max} °C</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>Low</Text>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>{temp_min} °C</Text>
                    </View>

                   
                
                </View>

                <View style={styles.extraInfo}>
                   <View style={styles.info}>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>Wind</Text>
                        <Text style={{ fontSize: 22, fontWeight:'bold',color: 'white' }}>{speed} m/s</Text>
                    </View>
                </View>

               

                

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginLeft:8,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        padding: 10,
        justifyContent: 'center'
    }
});