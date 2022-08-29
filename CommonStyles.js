
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    buttonWithShadow: {
        marginTop: hp('4%'),
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 0.5, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        height: 50,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        marginBottom: 10,
        alignSelf: 'center'
    },
    viewWithShadow: {
        backgroundColor: 'white',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 25,
        flexDirection: "row",
        alignSelf: "center",
        width: "96%",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        minHeight: 50, //... For dynamic height
        backgroundColor: "transparent",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "gray",
        paddingLeft: 10, //... With respect to the min height, so that it doesn't cut
        paddingTop: 10, //... With respect to the min height, so that it doesn't cut
        paddingBottom: 10 //... With respect to the min height, so that it doesn't cut
    },
    gradientButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    saperator: {
        width: '98%',
        height: 1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ccc'
    }

});