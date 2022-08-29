import React, { Component } from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { BlurView } from "@react-native-community/blur";
import FastImage from 'react-native-fast-image'

class BlurImageView extends Component {

    static propTypes = {
        overlayColor: PropTypes.string,
        blurAmount: PropTypes.number,

    };

    static defaultProps = {
        overlayColor: '#10161b',
        blurAmount: 2
    };

    render() {
        return (
            <>
                <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    source={this.props.image}
                    style={styles.image} />
                {Platform.OS == 'ios' && (
                    <BlurView
                        style={styles.image}
                        blurType="light"
                        blurAmount={3}
                    />
                )}
                {/* */}
                <View style={styles.overlayView} />
            </>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    overlayView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#10161b',
        opacity: 0.85
    }
})

export default BlurImageView;
