import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import Add from './Add';
import { Modal, Portal, Provider, Surface, IconButton, Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
    margin: 10,
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

const FrontPageContainer = ({ units, latestDraughtConsumed, latestDraught }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text>Units today {units}</Text>
      <Text>You have been clean {latestDraughtConsumed} days</Text>
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} style={styles.modal} >
            <Surface style={styles.surface}>
              <IconButton
                icon="glass-wine"
                size={30}
                onPress={() => console.log('Pressed')}
              />
              <Text>Wine</Text>
            </Surface>
            <Surface style={styles.surface}>
              <IconButton
                icon="beer"
                size={30}
                onPress={() => console.log('Pressed')}
              />
              <Text>Beer</Text>
            </Surface>
            
            
          </Modal>
        </Portal>
      </Provider>
      <Add onPress={showModal} />
    </View>
  );
};

export default FrontPageContainer;