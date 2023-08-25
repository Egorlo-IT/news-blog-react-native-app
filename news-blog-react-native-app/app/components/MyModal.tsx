import { Modal, View, Text, StyleSheet } from "react-native";

const MyModal = ({ isVisible, children }: any) => {
  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.textColor}>{children}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textColor: {
    color: "#e74c3c",
  },
});

export default MyModal;
