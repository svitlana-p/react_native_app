import { ActivityIndicator, View } from "react-native"
import { styles } from "./Loading.style"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"


export const Loading = () => {
    const show = useSelector((state:RootState) => state.loading.show)
    return (
        show &&
        <View style={styles.container}>
            <ActivityIndicator animating={true} color={styles.spiner.color}/>
        </View>

    )
}