import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     paddingTop: 50
    //     // justifyContent: "center",
    //     // alignItems: "center"
    // },
    item: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "rgba(0,0,0,0.2)",
        borderBottomWidth: 1
    },
    item_info: {
        marginLeft: 10,
    },
    title: {
        fontFamily: 'sanspro-bold',
        fontSize: 16
    },
    titleView: {
        paddingVertical: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    subtitleView: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    imgView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 5
    },
    imgArticle: {
        width: 160,
        height: 160,
    },
    text: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    }
});

export default styles