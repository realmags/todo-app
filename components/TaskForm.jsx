import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

export default function TaskForm({
  toggleModal,
  setToggleModal,
  handleAddTask,
}) {
  const initialTaskInput = {
    task: "",
    details: "",
  };
  const [taskInput, setTaskInput] = useState(initialTaskInput);
  const [focusInput, setFocusInput] = useState(false);

  const handleToggleModal = () => {
    setTaskInput(initialTaskInput);
    Keyboard.dismiss();
    setToggleModal(false);
  };
  const handleChangeText = (value, field) => {
    let input = {};
    input[field] = value;
    setTaskInput((prevTaskInput) => ({ ...prevTaskInput, ...input }));
  };

  useEffect(() => {
    if (!toggleModal) setFocusInput(false);
    else
      setTimeout(() => {
        setFocusInput(true);
      }, 100);
  }, [toggleModal]);

  return (
    <Modal
      visible={toggleModal}
      animationType="fade"
      onRequestClose={handleToggleModal}
      transparent={true}
    >
      <View style={styles.modalWrapper}>
        <TouchableWithoutFeedback onPress={handleToggleModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        {/* write a task */}
        {focusInput && (
          <KeyboardAvoidingView style={styles.writeTaskWrapper}>
            <TextInput
              style={styles.primaryInput}
              placeholder="New task"
              onChangeText={(value) => handleChangeText(value, "task")}
              autoFocus={true}
            />
            <TextInput
              style={styles.secondaryInput}
              placeholder="Add details"
              onChangeText={(value) => handleChangeText(value, "details")}
            />
            {/* save task */}
            <TouchableOpacity
              style={styles.saveButtonWrapper}
              onPress={() => handleAddTask(taskInput)}
              disabled={taskInput.task === ""}
            >
              <Text
                style={[
                  styles.saveButton,
                  { opacity: taskInput.task === "" ? 0.6 : 1 },
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#333333d5",
  },
  writeTaskWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  primaryInput: {
    fontSize: 16,
  },
  secondaryInput: {
    fontSize: 14,
  },
  saveButtonWrapper: {
    alignSelf: "flex-end",
  },
  saveButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#55bcf6",
    paddingVertical: 5,
  },
});
