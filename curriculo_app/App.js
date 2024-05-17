import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



// Component to open LinkedIn profile
const Component = () => {
  
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/devcarloscampos/');
  };

  const openGithub = () => {
    Linking.openURL('https://github.com/carloscamposb');
  };

   const openContact = () => {
      Linking.openURL('https://wa.me/5581994197635');;
  };


  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={openLinkedIn} style={styles.iconTextContainer}>
        <FontAwesome name="linkedin" style={styles.iconLink} />
        <Text style={styles.iconTextLink}>Access LinkedIn</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={openGithub} style={styles.iconTextContainer}>
        <FontAwesome name="github" style={styles.iconLink} />
        <Text style={styles.iconTextLink}>Access Github</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openContact} style={styles.iconTextContainer}>
        <FontAwesome name="phone" style={styles.iconLink} />
        <Text style={styles.iconTextLink}>Access WhatsApp</Text>
      </TouchableOpacity>

    </View>
  );
};


const ProjectApe = () => {
  const openNetlify = () => {
    Linking.openURL('https://ape-startup.netlify.app');
  };

  const openGithub = () => {
    Linking.openURL('https://github.com/Ape-Startup/ApeStartup');
  };

  return (
    <View style={styles.iconContainerProject}>
     
     <View>
        <TouchableOpacity onPress={openNetlify} style={styles.TextContainerProject}>
            <Image
                style={styles.pageViewIcon}
                source={require('./assets/pageView.png')}
          />
          <Text style={styles.iconTextProject}>Page</Text>
        </TouchableOpacity>
     </View>
      
      <View>
        <TouchableOpacity onPress={openGithub} style={styles.TextContainerProject}>
        <Image
                style={styles.gitHubRepo}
                source={require('./assets/githubRepo.png')}
          />
          <Text style={styles.iconTextProject}>Code</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
};


const TaPagoApp = () => {
  const openNetlify = () => {
    Linking.openURL('https://tapagoapp.netlify.app');
  };

  const openGithubRepository = () => {
    Linking.openURL('https://github.com/carloscamposb/TaPagoApp');
  };

  return (
    <View style={styles.iconContainerProject}>
      <View>
        <TouchableOpacity onPress={openNetlify} style={styles.TextContainerProject}>
          <Image
                  style={styles.pageViewIcon}
                  source={require('./assets/pageView.png')}
            />
          <Text style={styles.iconTextProject}>Page</Text>
        </TouchableOpacity>
      </View>
       <View>
        <TouchableOpacity onPress={openGithubRepository} style={styles.TextContainerProject}>
          <Image
                  style={styles.gitHubRepo}
                  source={require('./assets/githubRepo.png')}
            />
          <Text style={styles.iconTextProject}>Code</Text>
        </TouchableOpacity>
       </View>
      
     
    </View>
  );
};



const RideShareApp = () => {
  const openNetlify = () => {
    Linking.openURL('https://app-rideshare.netlify.app/');
  };

  const openGithubRepository = () => {
    Linking.openURL('https://github.com/carloscamposb/Projeto_RideShare');
  };

  return (
    <View style={styles.iconContainerProject}>
      <View>
        <TouchableOpacity onPress={openNetlify} style={styles.TextContainerProject}>
        <Image
                  style={styles.pageViewIcon}
                  source={require('./assets/pageView.png')}
            />
          <Text style={styles.iconTextProject}>Page</Text>
        </TouchableOpacity>
      </View>
       <View>
        <TouchableOpacity onPress={openGithubRepository} style={styles.TextContainerProject}>
        <Image
                  style={styles.gitHubRepo}
                  source={require('./assets/githubRepo.png')}
            />
          <Text style={styles.iconTextProject}>Code</Text>
        </TouchableOpacity>
       </View>
      
 
    </View>
  );
};





// Page components
const HomePage = () => {
  return (
    <View style={styles.page}>
     
      <Image
        style={styles.ProfileImage}
        source={require('./assets/carlosProfile.png')}
      />
      <Text style={styles.homeText}>Carlos Campos</Text>
     
      <View style={styles.infoGroup}>
       
        <Text style={styles.iconText}> Recife, Pernambuco - Brazil</Text>  
       

      </View>

      <View style={styles.infoGroupLinks}>
        <Component /> 
      </View>
    
    </View>
  );
};


// Page one
const Page1 = () => {
  return (
    <View style={styles.page}>
      
      <View style={styles.textGroup}>
        <Text style={styles.pageTitle}>About</Text>
        <Text style={styles.pageTitleDecoration}>me</Text>
      </View>

      <Text style={styles.majorText}> I started my career as a developer in 2023 since then, I have been refining my expertise in various technologies, leveraging diverse tools that facilitate the creation of unique solutions for the market.</Text>
      
      <View  style={styles.SubtextGroup}>
        <Text style={[styles.pageTitle, styles.secondTitle]}>Awards</Text>
      </View>

      <View style={styles.dotsGroup}>
        <FontAwesome name="circle" style={styles.dotIcon} /> 
        <Text style={styles.smallText}>Honorable mention in the Gastronomic Challenge of Tursitech and Embratur LAB</Text>
      </View>

      <View  style={styles.dotsGroup}>
        <FontAwesome name="circle" style={styles.dotIcon} /> 
        <Text style={styles.smallText}>Third place in Startup Way-SEBRAE with an innovative project in the tourism sector</Text>
      </View>

      <View  style={styles.dotsGroup}>
        <FontAwesome name="circle" style={styles.dotIcon} /> 
        <Text style={styles.smallText}>Third place in Early Stage-SEBRAE with an innovative project in the tourism sector</Text>
      </View>                    
   
    </View>

  
  );
};

// Page two
const Page2 = () => {
  return (
    <View style={styles.page}>
      <View style={styles.textGroup}>
        <Text style={styles.pageTitle}>Formation</Text>
      </View>
        
        <Text style={styles.majorText}>Graduated in Systems Analysis and Development - National Service for Commercial Learning (SENAC-Recife, Pernambuco). 2023 - present.</Text>
      
      
      <View style={styles.containerFormationDots}>
        <View  style={[styles.dotsGroup, styles.dotsFormation]}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.smallText}>Company: StartUp Apé - Position: Technology Header.2023-present</Text>
        </View>
        
        <View   style={[styles.dotsGroup, styles.dotsFormation]}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.smallText}>Course (online): Professional FullStack JavaScript Developer at Onebitcode. 2023-present</Text>
        </View>
        
        <View   style={[styles.dotsGroup, styles.dotsFormation]}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.smallText}>Course (online): Introduction to Git and GitHub at Digital Innovation One.2023-2023</Text>
        </View>   
        
        <View   style={[styles.dotsGroup, styles.dotsFormation]}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.smallText}>Course (online): Database Modeling, Implementation and Administration Company: Fundação Bradesco 2023-2023</Text>
        </View>
        
        <View   style={[styles.dotsGroup, styles.dotsFormation]}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.smallText}>Course: Upper-Intermediate English at SENAC-Recife, Pernambuco. 2019 -2019</Text>
        </View>

      </View>
     
    </View>
  );
};



// Page three
const Page3 = () => {
  return (
    <View style={styles.page}>
      
      <View style={styles.subtitleOne}>
        <Text style={styles.pageTitleDecoration}>Hard</Text>
        <Text style={styles.pageTitle}>Skills</Text>
      </View> 

      <View style={styles.groupSkill}>
         <View style={styles.itemGroupSkill} >
            <Image
              style={styles.skillImage}
              source={require('./assets/javaScript.png')}
            />
            <Text style={styles.smallText}>JavaScript</Text>
            <View style={styles.dotSkill}>
            <FontAwesome name="circle" style={styles.dotIconColor} /> 
            <FontAwesome name="circle" style={styles.dotIconColor} /> 
            <FontAwesome name="circle" style={styles.dotIconColor} /> 
            <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            </View>
         </View>

         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/git.png')}
            />
            <Text style={styles.smallText}>Git</Text>
            <View style={styles.dotSkill}>
            <FontAwesome name="circle" style={styles.dotIconColor} /> 
            <FontAwesome name="circle" style={styles.dotIconColor} /> 
            <FontAwesome name="circle" style={styles.dotIconColor} /> 
            <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            </View>
         </View>
      </View>



      <View style={styles.groupSkill}>
         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/reactNative.png')}
            />
            <Text style={styles.smallText}>React Native</Text>
            <View style={styles.dotSkill}>
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            </View>
         </View>

         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/nodeJs.png')}
            />
            <Text style={styles.smallText}>Node JS</Text>
            <View style={styles.dotSkill}>
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            </View>
         </View>
      </View>
        

      <View style={styles.groupSkill}>
         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/mySql.png')}
            />
            <Text style={styles.smallText}>MySQL</Text>
            <View style={styles.dotSkill}>
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            </View>
         </View>

         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/mongoDb.png')}
            />
            <Text style={styles.smallText}>Mongo DB</Text>
            <View style={styles.dotSkill}>
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
              <FontAwesome name="circle" style={styles.dotIconNoColor} /> 
            </View>
         </View>
      </View>


      <View  style={styles.subtitleTwo}>
        <Text style={styles.pageTitleDecoration}>Soft</Text>
        <Text style={styles.pageTitle} >Skills</Text>
      </View>
       

    
      <View style={styles.groupSoftSkill}>
        
         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/communication.png')}
            />
            <Text style={[styles.smallText, styles.tinyText]}>Conversation</Text>
    
         </View>

         <View style={styles.itemGroupSkill}>
            <Image
             style={styles.skillImage}
              source={require('./assets/creativity.png')}
            />
            <Text style={styles.smallText}>TeamWork </Text>
          
         </View>
      </View>
        

      <View style={styles.groupSoftSkill}>
         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/punctuality.png')}
            />
            <Text style={styles.smallText}>Punctuality</Text>
            
         </View>

         <View style={styles.itemGroupSkill}>
            <Image
              style={styles.skillImage}
              source={require('./assets/teamWork.png')}
            />
            <Text style={styles.smallText}>Creativity</Text>
            
         </View>
      </View>
        

    </View>
  
  );
};




// Page four
const Page4 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.page, styles.pageTitleProject]}>
        
        <View style={styles.textGroup}>
          <Text style={styles.pageTitle}>Projects</Text>
        </View>

        <View style={styles.mainProjects}>
          
          <View style={styles.projectGroup}>
            <View  style={styles.topElements}>
              <Image
                  style={styles.informationsGroup}
                  source={require('./assets/startupApe.png')}
              /> 
                <Text style={styles.subtitleProject}>Startup Apé WebPage</Text>
            </View>
          
            <View>

            
              <Text style={[styles.smallText, styles.TextProject]}>The responsive web page showcases its roadmap and enables easy communication via WhatsApp and traditional email forms through APIs. This integration ensures seamless interaction for both clients and partners.</Text>
                
              <View style={styles.infoGroupLinks}>
                <ProjectApe /> 
              </View>
                
              </View>
              
          </View>

          <View style={styles.projectGroup}>
            <View  style={styles.topElements}>
              <Image
                style={styles.informationsGroup}
                  source={require('./assets/taPago.png')}
              /> 
                <Text style={styles.subtitleProject}>TaPago App</Text>
            </View>
          
            <View >

            
              <Text  style={[styles.smallText, styles.TextProject]} >Application developed to remind users, through notifications, to pay their bills. Account image, description, amounts, and due dates are stored in the database and organized in the application according to their due dates, categorizing them as either current or overdue bills.</Text>
                
              <View style={styles.infoGroupLinks}>
                <TaPagoApp /> 
              </View>
                
              </View>
              
          </View>


          <View style={styles.projectGroup}>
            <View  style={styles.topElements}>
              <Image
                  style={styles.informationsGroup}
                  source={require('./assets/rideShare.png')}
              /> 
            <Text style={styles.subtitleProject}>RideShare app</Text>
            </View>
          
            <View >

              <Text  style={[styles.smallText, styles.TextProject]}>Connects employees who share similar routes to work, promoting sustainability and reducing the number of vehicles on the roads. Integrated with a database, it features sections for drivers and passengers, map API for location tracking, chat API for messaging, trip histories, among other functionalities.</Text>
                
              <View style={styles.infoGroupLinks}>
                <RideShareApp /> 
              </View>
                
              </View>
              
          </View>

        

        </View>
      
      </View> 
    </ScrollView>
  );
};




// Calls (?)

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //Open and close Menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  // Conditional rendering of current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Page 1':
        return <Page1 />;
      case 'Page 2':
        return <Page2 />;
      case 'Page 3':
        return <Page3 />;
      case 'Page 4':
        return <Page4 />;        
      default:
        return null;
    }
  };


  //returned elements (?)

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Curriculum</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text style={styles.menuHamburger}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Home')}>
          <FontAwesome name="home"style={styles.iconNav} />
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Page 1')}>
          <FontAwesome name="user" style={styles.iconNav} />
            <Text style={styles.menuItemText}>About me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Page 2')}>
          <FontAwesome name="graduation-cap" style={styles.iconNav}/>
            <Text style={styles.menuItemText}>Formation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem } onPress={() => navigateTo('Page 3')}>
          <FontAwesome name="bar-chart" style={styles.iconNav} />
            <Text style={styles.menuItemText}>Skills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem } onPress={() => navigateTo('Page 4')}>
          <FontAwesome name="book" style={styles.iconNav} />
            <Text style={styles.menuItemText}>Projects</Text>
          </TouchableOpacity>
       
        </View>
      )}

      {/* Content */}
      <View style={styles.content}>{renderPage()}</View>
    </View>
  );
};

// Styles


const styles = StyleSheet.create({

  // General
  container: {
    flex: 1,
    backgroundColor: '#1B1D2E',
    paddingTop: 24,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3D3E4E',
    
  },

  menuHamburger: {
     fontSize:25, 
     color:'#AAACC0',  
  },


  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#B01A3E',
  },
 
  menuIcon: {
    padding: 10,
  },
 
  menu: {
    backgroundColor: '#1B1D2E',
    padding: 10,
    paddingTop:2,
    paddingBottom:0,
    position:'absolute',
    width:'100%',
    top:98.7,
    zIndex:99999,
  },
 
  menuItem: {
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#B01A3E',
  },  


  menuItemText: {
    fontSize: 17,
    marginLeft:50,
    color: '#F7F6F2',
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  page: {
    position: 'relative', // Adding to serve as a reference for absolute positioning
    width: '100%', // Ensuring the container has a defined width
    height: '100%', // Ensuring the container has a defined height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1B1D2E',
    
  },

  ProfileImage:{
    width:220,
    height:245,
    position:'absolute',
    top:60,
  },



 
 iconLink:{
  fontSize:30, 
  color:'#AAACC0',
  paddingLeft:20,
  position:'absolute',
  bottom:10,
  
 },

 
 iconNav:{
  fontSize:30, 
  top: 25,
  color:'#AAACC0',
 },

 
iconContainer: {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%',
  marginTop:40,
  
},

iconTextContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap:10,
  width:'90%',
  paddingVertical:10,
  marginBottom:20,
  borderRadius: 5,
  backgroundColor:'#B01A3E',
},

iconText: {
  color:'#AAACC0',
  textAlign: 'center',
  fontSize:18,

 
},

iconTextLink: {
  color: '#F7F6F2',
  marginLeft: 55,
  textAlign: 'center',
  fontSize:18,

 
},

infoGroupLinks:{
  width:'65%',
  
},

infoGroup:{
  paddingVertical: 5,
  width:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  gap: 10,
  paddingTop:20,
  
},



// Main page text style
  homeText: {
    fontSize: 30,
    paddingLeft:35,
    marginTop: 230,
    paddingRight:35,
    textAlign: 'center',
    color:'#F7F6F2',  
  },


  // PAGE About me
  
  textGroup:{
   display:'flex',
   flexDirection: 'row',
   justifyContent:'center',
   alignItems:'center',
   gap: 7,
   position:'absolute',
   top:65,
   width:'50%',
   borderBottomWidth: 1,
   borderBottomColor: '#B01A3E',
  },

  pageTitle:{
    fontSize:30, 
    color:'#F7F6F2',
    fontWeight:'bold',
   },
     

   pageTitleDecoration:{
    fontSize:30, 
    color:'#B01A3E',
    fontWeight:'bold',
    
   }, 
  
  majorText:{
    position:'absolute',
    top:120,
    textAlign:'center',
    paddingLeft:10,
    paddingRight:10,
    color:'#AAACC0',
    fontSize:18,
    
   }, 

//awards

   SubtextGroup:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    borderBottomWidth: 1,
    marginBottom:20,
    marginTop:250,
    borderBottomColor: '#B01A3E',
   },

   dotsGroup:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
    justifyContent:'center',
    width:'80%',
    marginBottom: 35,
    textAlign:'center',



   },


   smallText:{
    paddingLeft:20,
    paddingRight:10,
    fontSize:16,
    color:'#AAACC0',
   },

  dotIcon:{
    fontSize:12, 
    color:'#B01A3E',
    paddingLeft:20,
    position:'absolute',
    left:-20, 
    top:5,
    
   },
  

// PAGE Formation
containerFormationDots:{
 marginTop:250,
},

dotsFormation:{
 marginBottom:20,
},

// PAGE Skills
groupSkill:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  gap:100,
},

itemGroupSkill:{
 display:'flex',
 flexDirection:'column',
 alignItems:'center',
 gap:0,
 marginBottom:20,
},

dotSkill:{
 display:'flex',
 flexDirection:'row',
 gap:10,
},

dotIconColor:{
  fontSize:15, 
  color:'#B01A3E',
  marginTop:5,
},

dotIconNoColor:{
  fontSize:15, 
  color:'#AAACC0',
  marginTop:5,
},

subtitleOne:{
  display:'flex',
  flexDirection:'row',
  gap:7,
  width:'100%',
  marginTop:10,
  padding:20,
},


subtitleTwo:{
  display:'flex',
  flexDirection:'row',
  gap:7,
  width:'100%',
  marginTop:20,
  padding:20,
},

groupSoftSkill:{
display:'flex',
flexDirection:'row',
gap:100,
},



tinyText:{
 fontSize:15,
 
},

// PAGE Project
pageTitleProject:{
 top: -20,
},

mainProjects:{
 marginTop:140,
},

projectGroup:{
display:'flex',
flexDirection:'column',
marginBottom: 80,
},


subtitleProject:{
  fontSize:20,
  paddingLeft:20,
  fontWeight:'bold',
  color:'#F7F6F2'
},

iconContainerProject:{
     display: 'flex',
     flexDirection:'row',
     gap: 25,
     alignItems:'center',
     justifyContent:'flex-end',
     marginTop:10,
     position:'absolute',
     right:-100
    
},

topElements:{
  display:'flex',
  flexDirection:'row',
  alignItems: 'center',
  paddingLeft:15,
},

iconTextProject:{
color:'#F7F6F2',
},

TextProject:{
paddingTop:10, 
fontSize:15,
textAlign:'justify',

},


});

export default App;
