import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TextDetectionList } from "./textDetection/TextDetectionList";
import { TextDetectionCreate } from "./textDetection/TextDetectionCreate";
import { TextDetectionEdit } from "./textDetection/TextDetectionEdit";
import { TextDetectionShow } from "./textDetection/TextDetectionShow";
import { VideoStreamList } from "./videoStream/VideoStreamList";
import { VideoStreamCreate } from "./videoStream/VideoStreamCreate";
import { VideoStreamEdit } from "./videoStream/VideoStreamEdit";
import { VideoStreamShow } from "./videoStream/VideoStreamShow";
import { CameraList } from "./camera/CameraList";
import { CameraCreate } from "./camera/CameraCreate";
import { CameraEdit } from "./camera/CameraEdit";
import { CameraShow } from "./camera/CameraShow";
import { MovementStatusList } from "./movementStatus/MovementStatusList";
import { MovementStatusCreate } from "./movementStatus/MovementStatusCreate";
import { MovementStatusEdit } from "./movementStatus/MovementStatusEdit";
import { MovementStatusShow } from "./movementStatus/MovementStatusShow";
import { DetectedObjectList } from "./detectedObject/DetectedObjectList";
import { DetectedObjectCreate } from "./detectedObject/DetectedObjectCreate";
import { DetectedObjectEdit } from "./detectedObject/DetectedObjectEdit";
import { DetectedObjectShow } from "./detectedObject/DetectedObjectShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"VideoAnalyticsServiceNodeJs"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TextDetection"
          list={TextDetectionList}
          edit={TextDetectionEdit}
          create={TextDetectionCreate}
          show={TextDetectionShow}
        />
        <Resource
          name="VideoStream"
          list={VideoStreamList}
          edit={VideoStreamEdit}
          create={VideoStreamCreate}
          show={VideoStreamShow}
        />
        <Resource
          name="Camera"
          list={CameraList}
          edit={CameraEdit}
          create={CameraCreate}
          show={CameraShow}
        />
        <Resource
          name="MovementStatus"
          list={MovementStatusList}
          edit={MovementStatusEdit}
          create={MovementStatusCreate}
          show={MovementStatusShow}
        />
        <Resource
          name="DetectedObject"
          list={DetectedObjectList}
          edit={DetectedObjectEdit}
          create={DetectedObjectCreate}
          show={DetectedObjectShow}
        />
      </Admin>
    </div>
  );
};

export default App;
