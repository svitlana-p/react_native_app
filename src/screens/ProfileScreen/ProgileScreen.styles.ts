import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#04092e',
      opacity: 0.8,
      justifyContent: 'space-between',
      padding: 16,
    },
    button:{
        color: '#020b3d'
    },
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 16,
        flexDirection:'row',
        alignItems: 'center',
        gap:16,
        marginBottom: 20,
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 10,
      },
      emailText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
  });
