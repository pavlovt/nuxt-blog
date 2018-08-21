export default {
	user: {},
  // html head
  head: {
    preTitle: 'Admin Panel - ', 
    postTitle: '', 
    title: 'hohoho', 
    charset: 'utf8',
    ie: {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
    viewport: { content: 'width=device-width,initial-scale=1.0'},
  },
  server: {
    // url: 'http://10.6.0.65/interactivemapapi/api',
    url: 'https://interactivemapapi.azurewebsites.net/api',
    //url: 'http://localhost:11607/api',
    apis: {
      login: '/token',
      logout: '/token',
      user: '/employees',
      floors: '/floors',
      buildings: '/buildings',
      floorPlans: '/floorplans',
      employees : '/employees',
      search : '/search',
    }
  },
  mock: {
    rooms: [
      {position: "320.7720031738281,150.36187744140625 320.77201447527136,280.67551266586247 431.0373944511459,280.67551266586247 431.0373944511459,150.36188178528346", type: 'kitchen', file: 'kitchen'},
      {position: "902.1712646484375,0 902.1712907117007,10.02412545235223 902.1712907117007,140.33775633293124 932.2436670687574,140.33775633293124 932.2436670687574,280.67551266586247 1042.5090470446319,280.67551266586247 1042.5090470446319,0", type: 'meeting-room', file: 'meetingroom'},
      {position: "431.0373840332031,80.19300079345703 431.0373944511459,140.33775633293124 571.3751507840772,140.33775633293124 571.3751507840772,0 491.18214716525927,0 491.18214716525927,80.19300361881784", type: 'meeting-room', number: 203, file: 'meetingroom'},
      {position: "1042.509033203125,330.796142578125 1042.5090470446319,421.01326899879365 1152.7744270205064,421.01326899879365 1152.7744270205064,330.7961399276236", type: 'wc', file: 'wc'},
      {position: "571.3751220703125,431.0373840332031 571.3751507840772,511.2303980699637 681.6405307599516,511.2303980699637 681.6405307599516,431.0373944511459", type: 'wc', file: 'wc'}
    ],
    seats: [
      {id: "1", x: 349, y:169, number: 34, employee: 7},
      {id: "2", x: 539, y:189, number: 35, employee: 8},
      {id: "3", x: 709, y:39, number: 6, employee: 9}
    ]
  }
}