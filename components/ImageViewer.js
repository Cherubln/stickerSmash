import { View, Text, StyleSheet, Image } from "react-native";

const ImageViewer = ({ PlaceholderImageSource, selectedImage }) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : PlaceholderImageSource;
  return <Image style={styles.image} source={imageSource} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
