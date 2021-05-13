const achievements = {
  snowboard: [
    {
      level: 1,
      description: 'First Time Rider',
      achievements: [
        {
          key: 'equipment',
          description: 'Able to put on and take off snowboard'
        },
        {
          key: 'skate',
          description: 'Can skate on flat terrain'
        },
        {
          key: 'climb',
          description: 'Able to move up and down inclines (one footed)'
        },
        {
          key: 'straight',
          description: 'Able to ride a straight run on a slope (one footed)'
        },
        {
          key: 'j-turn',
          description: 'Able to J turn heel and toe side (one footed)'
        },
        {
          key: 'stand-up-assisted',
          description: 'Able to stand up, when strapped in, with minimal assistance'
        },
        {
          key: 'sideslip-heel',
          description: 'Able to sideslip and stop heel side'
        },
        {
          key: 'sideslip-toe',
          description: 'Able to sideslip and stop toe side'
        },
        {
          key: 'carpet',
          description: 'Able to get on and off a Magic Carpet (one footed)'
        },
        {
          key: 'carpet-run',
          description: 'Can go down the Bunny Hill confidently'
        }
      ]
    },
    {
      level: 2,
      description: 'Beginner Rider',
      achievements: [
        {
          key: 'pendulum-heel',
          description: 'Can pendulum heel side'
        },
        {
          key: 'pendulum-toe',
          description: 'Can pendulum toe side'
        },
        {
          key: 'stand-up-unassisted',
          description: 'Able to stand up unassisted'
        },
        {
          key: 'toe-to-heel',
          description: 'Can perform Toe-to-Heel turn'
        },
        {
          key: 'heel-to-toe',
          description: 'Can perform Heel-to-Toe turn'
        },
        {
          key: 'chairlift',
          description: 'Able to get on and off chairlifts'
        },
        {
          key: 'paradise',
          description: 'Can go down an easy Green run confidently'
        }
      ]
    },
    {
      level: 3,
      description: 'Novice Rider',
      achievements: [
        {
          key: 'alpine',
          description: 'Understands and demonstrates the Alpine responsibility code'
        },
        {
          key: 'link-turns',
          description: 'Can link turns under control'
        },
        {
          key: 'stance',
          description: 'Able to turn with good stance and balance'
        },
        {
          key: 'edging',
          description: 'Uses edge to control direction of travel'
        },
        {
          key: 'turn-shape',
          description: 'Can vary turn shape and size'
        },
        {
          key: 'cut',
          description: 'Can turn down a long Green run confidently'
        }
      ]
    },
    {
      level: 4,
      description: 'Intermediate Rider',
      achievements: [
        {
          key: 'up-down',
          description: 'Uses up down movement throughout the turn'
        },
        {
          key: 'counter-rotation',
          description: 'Uses minimal counter rotation when turning'
        },
        {
          key: 'carved-traverse',
          description: 'Can perform a carved traverse between turns'
        },
        {
          key: 'turn-speed',
          description: 'Controls speed through turn shape and size'
        },
        {
          key: 'small-bumps',
          description: 'Links turns on ungroomed terrain'
        },
        {
          key: 'expo',
          description: 'Can turn down Blue runs confidently'
        }
      ]
    },
    {
      level: 5,
      description: 'Advanced Rider',
      achievements: [
        {
          key: 'consistent',
          description: 'Shows consistent steering through the whole turn'
        },
        {
          key: 'speed',
          description: 'Comfortable with speed and being flat-based at the fall line'
        },
        {
          key: 'big-bumps',
          description: 'Can confidently turn in bumpy terrain'
        },
        {
          key: '360',
          description: 'Can perform on-snow 360 in both directions'
        },
        {
          key: 'switch-cut',
          description: 'Can link switch turns down the Cut'
        },
        {
          key: 'peak',
          description: 'Can turn down Black runs confidently'
        }
      ]
    },
    {
      level: 6,
      description: 'Expert Rider',
      achievements: [
        {
          key: 'weight',
          description: 'Maintains a stance with weight centered over feet equally'
        },
        {
          key: 'lower-body',
          description: 'Uses rotational lower body (hips, knees) to turn the snowboard'
        },
        {
          key: 'turn-shape',
          description: 'Shows consistent rhythm and round symmetrical turn shape'
        },
        {
          key: 'angulation',
          description: 'Balances inclination and angulation to maintain edge grip'
        },
        {
          key: 'double-black',
          description: 'Can turn down Double Black runs confidently'
        },
        {
          key: 'all',
          description: 'Can ride all of the mountain confidently'
        }
      ]
    }
  ],
  ski: [
    {
      level: 1,
      description: 'First Time Skier',
      achievements: [
        {
          key: 'equipment',
          description: 'Able to put on and take off skis'
        },
        {
          key: 'flat',
          description: 'Can move on flat terrain (stepping, pole pushing, skating)'
        },
        {
          key: 'climb',
          description: 'Able to move up and down inclines (crab walk, sidestep)'
        },
        {
          key: 'straight',
          description: 'Able to ski a straight run on a slope'
        },
        {
          key: 'snowplow',
          description: 'Able to make a snowplow (pizza) stop'
        },
        {
          key: 'turns',
          description: 'Able to turn in both directions'
        }
      ]
    },
    {
      level: 2,
      description: 'Beginner Skier',
      achievements: [
        {
          key: 'get-up',
          description: 'Able to get up without assistance'
        },
        {
          key: 'link-turns',
          description: 'Able to link snowplow (pizza) turns'
        },
        {
          key: 'follow',
          description: 'Can follow another skier\'s (instructor, group member) line'
        },
        {
          key: 'carpet',
          description: 'Able to get on and off magic carpet'
        },
        {
          key: 'chairlift',
          description: 'Able to get on and off chairlifts'
        },
        {
          key: 'carpet-run',
          description: 'Can turn down the Magic Carpet (Green) confidently'
        },
        {
          key: 'paradise',
          description: 'Can turn down an easy Green run confidently'
        }
      ]
    },
    {
      level: 3,
      description: 'Novice Skier',
      achievements: [
        {
          key: 'alpine',
          description: 'Understands and demonstrates the Alpine responsibility code'
        },
        {
          key: 'turn-stance',
          description: 'Has a centered stance'
        },
        {
          key: 'counter-rotation',
          description: 'Uses minimal counter rotation when turning'
        },
        {
          key: 'edging',
          description: 'Uses edges to control direction of travel'
        },
        {
          key: 'parallel',
          description: 'Can bring skis parallel while turning'
        },
        {
          key: 'turn-shape',
          description: 'Can vary turn shape and size'
        },
        {
          key: 'poles',
          description: 'Uses poles while skiing'
        },
        {
          key: 'the-cut',
          description: 'Can turn down a long Green run confidently'
        }
      ]
    },
    {
      level: 4,
      description: 'Intermediate Skier',
      achievements: [
        {
          key: 'carve',
          description: 'Can make carved turns on groomed terrain'
        },
        {
          key: 'blue-short-radius',
          description: 'Can link short radius turns'
        },
        {
          key: 'turn-speed',
          description: 'Controls speed through turn shape and size'
        },
        {
          key: 'sideslip',
          description: 'Can sideslip both sides on groomed terrain'
        },
        {
          key: 'hockey',
          description: 'Can hockey stop on both sides'
        },
        {
          key: 'expo',
          description: 'Can turn down Blue runs confidently'
        }
      ]
    },
    {
      level: 5,
      description: 'Advanced Skier',
      achievements: [
        {
          key: 'turn-parallel',
          description: 'Maintains parallel stance throughout the turn'
        },
        {
          key: 'turn-initiate',
          description: 'Initiates turn with lower body'
        },
        {
          key: 'edge-release',
          description: 'Releases edges simultaneously at start of the turn'
        },
        {
          key: 'pole-plant',
          description: 'Can pole plant with proper timing and coordination'
        },
        {
          key: 'big-bumps',
          description: 'Can confidently turn in bumpy terrain'
        },
        {
          key: 'turn-variations',
          description: 'Can vary turn shape and size to terrain and snow conditions'
        },
        {
          key: 'peak',
          description: 'Can turn down Black runs confidently'
        }
      ]
    },
    {
      level: 6,
      description: 'Expert Skier',
      achievements: [
        {
          key: 'speed',
          description: 'Maintains intermediate speed while turning in the fall line'
        },
        {
          key: 'skills',
          description: 'Blends skills (rotation, edging, pressure) for steered arcs'
        },
        {
          key: 'turn-shape',
          description: 'Shows consistent rhythm and round symmetrical turn shape'
        },
        {
          key: 'balance',
          description: 'Uses all joints to maintains balance throughout the turn'
        },
        {
          key: 'angulation',
          description: 'Shows separation and angulation to maintain edge grip'
        },
        {
          key: 'double-black',
          description: 'Can turn down Double Black runs confidently'
        },
        {
          key: 'all',
          description: 'Can ride all of the mountain confidently'
        }
      ]
    }
  ]
}

export default achievements
