const BoneServer = require("./core/BoneServer");
const serverConfig = require("./server.config");

BoneServer.launchServer(serverConfig.port);
