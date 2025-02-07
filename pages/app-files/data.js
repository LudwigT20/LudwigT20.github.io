var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre_cantine_",
      "name": "Entrée_cantine_",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.612977772674814,
          "pitch": 0.16450210529603915,
          "rotation": 0,
          "target": "1-cantine_"
        },
        {
          "yaw": 1.1511723510486789,
          "pitch": 0.04368014318960256,
          "rotation": 0,
          "target": "2-bat_e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cantine_",
      "name": "Cantine_",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9252156871518524,
          "pitch": 0.10073677924817659,
          "rotation": 0,
          "target": "0-entre_cantine_"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bat_e",
      "name": "Bat_E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.402885418955762,
          "pitch": 0.07967810863742031,
          "rotation": 0,
          "target": "3-bat_a"
        },
        {
          "yaw": -1.634860999399315,
          "pitch": 0.12151689042315539,
          "rotation": 0,
          "target": "0-entre_cantine_"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bat_a",
      "name": "Bat_A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "View3D",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
