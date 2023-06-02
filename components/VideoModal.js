import { StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


const VideoModal = ({ onPress, onStateChange, part }) => {
   return (
      <View style={styles.modalContainer}>
         <View style={styles.modalContent}>
            <YoutubePlayer
               height={230}
               play={true}
               videoId={part.videoId}
               onChangeState={onStateChange}
            />
         </View>
         <TouchableOpacity style={styles.closeButton} onPress={onPress}>
            <Text style={styles.closeButtonText}>Close</Text>
         </TouchableOpacity>
      </View>

   )
}

const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
   },
   modalContent: {
      backgroundColor: Colors.secondary500,
      width: '100%',
   },
   closeButton: {
      backgroundColor: Colors.primary500,
      paddingVertical: 10,
      paddingHorizontal: 20,
      margin: 10,
   },
   closeButtonText: {
      color: "white",
      fontSize: 16,
   },
});

export default VideoModal;