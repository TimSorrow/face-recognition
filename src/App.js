import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '019fc412a3f74dd2a8cde6b0abda3b52'
 });


const particlesOptions = {
    "autoPlay": true,
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": false,
          "mode": []
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": true,
          "mode": "trail",
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4,
          "mix": false
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad"
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": 0.005,
          "pauseOnStop": true,
          "quantity": 5,
          "particles": {
            "color": {
              "value": "#ff0000",
              "animation": {
                "enable": true,
                "speed": 400,
                "sync": true
              }
            },
            "collisions": {
              "enable": false
            },
            "links": {
              "enable": false
            },
            "move": {
              "outModes": {
                "default": "destroy"
              },
              "speed": 2
            },
            "size": {
              "value": 5,
              "animation": {
                "enable": true,
                "speed": 5,
                "minimumValue": 1,
                "sync": true,
                "startValue": "min",
                "destroy": "max"
              }
            }
          }
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": true,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#ff0000",
        "animation": {
          "h": {
            "count": 0,
            "enable": true,
            "offset": 0,
            "speed": 50,
            "sync": false
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      },
      "destroy": {
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 3
          },
          "rate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true,
          "particles": {
            "stroke": {
              "width": 0
            },
            "color": {
              "value": [
                "#ff595e",
                "#ffca3a",
                "#8ac926",
                "#1982c4",
                "#6a4c93"
              ]
            },
            "number": {
              "value": 0
            },
            "collisions": {
              "enable": false
            },
            "opacity": {
              "value": {
                "min": 0.1,
                "max": 1
              },
              "animation": {
                "enable": true,
                "speed": 0.7,
                "sync": false,
                "startValue": "max",
                "destroy": "min"
              }
            },
            "shape": {
              "type": "circle"
            },
            "size": {
              "value": 2,
              "animation": {
                "enable": false
              }
            },
            "life": {
              "count": 1,
              "duration": {
                "value": {
                  "min": 1,
                  "max": 2
                }
              }
            },
            "move": {
              "enable": true,
              "gravity": {
                "enable": false
              },
              "speed": 2,
              "direction": "none",
              "random": true,
              "straight": false,
              "outMode": "destroy"
            }
          }
        }
      },
      "gradient": [],
      "groups": {},
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "random"
        },
        "consent": false,
        "distance": 100,
        "enable": true,
        "frequency": 1,
        "opacity": 1,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#00ff00"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "decay": 0,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 100
      },
      "opacity": {
        "random": {
          "enable": true,
          "minimumValue": 0.3
        },
        "value": {
          "min": 0.3,
          "max": 0.8
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 0.5,
          "sync": false,
          "destroy": "none",
          "startValue": "random",
          "minimumValue": 0.3
        }
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 45
        },
        "width": 1
      },
      "reduceDuplicates": false,
      "repulse": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {},
        "type": "circle"
      },
      "size": {
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 3,
          "sync": false,
          "destroy": "none",
          "startValue": "random",
          "minimumValue": 1
        }
      },
      "stroke": {
        "width": 0,
        "color": {
          "value": "#ffffff",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "s": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "l": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            }
          }
        }
      },
      "tilt": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": 50
      },
      "zIndex": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "style": {},
    "themes": [],
    "zLayers": 100,
    "emitters": []
  }

  class App extends Component {
    constructor() {
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin',
        isSignedIn: false,
        user: {
          id: '',
          name: '',
          email: '',
          entries: 0,
          joined: ''
        }
      }
    }
  
    loadUser = (data) => {
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
    }
  
    calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
  
    displayFaceBox = (box) => {
      this.setState({box: box});
    }
  
    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }
  
    onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      app.models
        .predict(
      // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
      // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
      // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
      // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
      // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
      // so you would change from:
      // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      // to:
      // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
      '53e1df302c079b3db8a0a36033ed2d15', this.state.input)
        .then(response => {
          console.log('hi', response)
          if (response) {
            fetch('http://localhost:3000/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(response => response.json())
              .then(count => {
                this.setState(Object.assign(this.state.user, { entries: count}))
              })
  
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }
  
    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      }
      this.setState({route: route});
    }
  
    render() {
      const { isSignedIn, imageUrl, route, box } = this.state;
      return (
        <div className="App">
           <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          { route === 'home'
            ? <div>
                <Logo />
                <Rank
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
                <ImageLinkForm
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
            : (
               route === 'signin'
               ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
               : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
          }
        </div>
      );
    }
  }
  
  export default App;