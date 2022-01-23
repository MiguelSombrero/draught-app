import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import AddDraught from './AddDraught';
import Charts from './Charts';
import FrontPage from './FrontPage';
import Settings from './Settings';

const BottomBar = ({ signOut }) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'main', title: 'Home', icon: 'home-outline' },
    { key: 'draught', title: 'Add Draught', icon: 'beer' },
    { key: 'stats', title: 'Stats', icon: 'chart-bar' },
    { key: 'settings', title: 'Settings', icon: 'account-settings' },
  ]);

  const MainRoute = () => <FrontPage />;
  const DraughtRoute = () => <AddDraught />;
  const StatsRoute = () => <Charts />;
  const SettingsRoute = () => <Settings signOut={signOut} />;

  const renderScene = BottomNavigation.SceneMap({
    main: MainRoute,
    draught: DraughtRoute,
    stats: StatsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomBar;