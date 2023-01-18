import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.psu.walktober',
  appName: 'Walktober',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '949612719811-m9ptfp5jos5edh8hc2ce5c7fo1ae99qq.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
