var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-",
      "name": "LIVING ",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.06438072213269308,
        "pitch": -0.021833556287074174,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.222211035959285,
          "pitch": 0.3026777526978712,
          "rotation": 1.5707963267948966,
          "target": "1-dining"
        },
        {
          "yaw": 0.2368403292979675,
          "pitch": 0.12829945846775104,
          "rotation": 0,
          "target": "3-first-floor-living"
        },
        {
          "yaw": 0.8934445240622395,
          "pitch": 0.3242926892657998,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.36230115448994127,
          "pitch": 0.0952303928840621,
          "rotation": 1.5707963267948966,
          "target": "3-first-floor-living"
        },
        {
          "yaw": 2.153733726439807,
          "pitch": 0.40977443618711895,
          "rotation": 5.497787143782138,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.309605612489964,
          "pitch": 0.29105503914868436,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor-living",
      "name": "FIRST FLOOR LIVING",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5767531447698317,
          "pitch": 0.2237744629593461,
          "rotation": 3.141592653589793,
          "target": "0-living-"
        },
        {
          "yaw": 1.3724805464881609,
          "pitch": 0.23613312127243447,
          "rotation": 0.7853981633974483,
          "target": "4-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sitout",
      "name": "SITOUT",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12038286864932246,
          "pitch": 0.23824105732837353,
          "rotation": 4.71238898038469,
          "target": "3-first-floor-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
