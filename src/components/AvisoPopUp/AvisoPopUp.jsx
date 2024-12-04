import { useRef, useCallback, useMemo } from "react";
import React from "react";
import "./styles.scss"
import MenuCoord from '../../../components/MenuCoord/MenuCoord'
import Header from '../../../Components/Header/Header'
import {StyleSheet, Text, View, Button} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from "@gorhom/bottom-sheet";

const HomeCoord = () => {
    return (
        <div id= 'containerHome'>
            <MenuCoord />
            <main>
                <Header />
            </main>
        </div>
    )
}

const BottomSheetref = useRef(null)
const SnapPoints = useMemo(() => ["30%","50%", "80%", "100%"], [])

const Rectangle = () => {
const handleCloseAction = () => BottomSheetref.current?.close()
const handleOpenPress = () => BottomSheetref.current?.expand();

const handleChange = useCallback ((index) => {
    console.log("CHANGE STATUS", index)
}, [])

  	return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.rectangleView}>
                <Button title="Abrir" onPress={handleOpenPress} />
                <BottomSheet>
                    ref={BottomSheetref}
                    index={1}
                    snapPoints={SnapPoints}
                    backgroundStyle={{backgroundColor: "#FFF" }}
                    enablePanDawnToClose={true}
                    <View style={styles.rectangleView}>
                        <Text style={styles.loremIpsumDolor}>{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lamagna `}</Text>
                        <Button title="Fechar" onPress={handleCloseAction} />
                    </View>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  	rectangleView: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		borderRadius: 5,
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 508
  	}
});

export default Rectangle;
