import  React from 'react';
import {ScrollView,Text,View} from 'react-native';
import { Avatar, List,Card, Title, IconButton,Paragraph, Appbar,Chip} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-ui-lib/src/incubator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';


     

const Home = ({navigation}) => (
       <View style={{flex:1}}>
        <Appbar style={styles.Appbar}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Avatar.Image style={styles.AvatarImage} size={40} source={require('./images/prabhas.jpg')}/>
            </TouchableOpacity>
            <Chip style={styles.chip} icon="magnify" onPress={()=> navigation.navigate('Search')}>Search</Chip>
            
            
            <Appbar.Action icon="chat" size={28} color='#87BCCE' onPress={()=>navigation.navigate('Messages')}/>
            
            
        </Appbar>
        
        
        <ScrollView>
            <List.Section>
                 <Card>
                        <Card.Title
                              title="Altiux Innovations Pvt.Ltd"
                              subtitle="Software Company in Bengaluru"
                              left={(props) => <Avatar.Image  {...props} source= {require('./images/altiux.jpg')} />}
                              right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                        />
                        <Card.Content>
                              <Title>Internet of Things(IoT)</Title>
                              <Paragraph>The Internet of Things (IoT) describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.</Paragraph>
                        </Card.Content>

                        <Card.Cover  resizeMode={'contain'}  source= {require('./images/IoT.jpg')}/>


                        <Card.Actions style={styles.CardActions}>

                           <Ionicons name="md-thumbs-up-outline" size={30} color="#87BCCE"/>
                           <Ionicons name="md-chatbox-outline" size={30} color="#87BCCE"  onPress={()=> navigation.navigate('Comments')} />
                           <Ionicons name="md-share-outline" size={30} color="#87BCCE"/>
                           <Ionicons name="md-send-outline" size={30} color="#87BCCE"/>

                       </Card.Actions>
               </Card>
            </List.Section>

            <List.Section>
              <Card>
                <Card.Title
                   title="Zebi Data India Pvt.Ltd."
                   subtitle="Software Development in Gannavaram"
                   left={(props) => <Avatar.Image size={32} {...props} source= {require('./images/iStudio.jpg')} />}
                   right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                 />
                <Card.Content>
                   <Title>Blockchain Training Vishakapatnam</Title>
                   <Paragraph>Blockchain technology is a structure that stores transactional records, also known as the block, of the public in several databases, known as the “chain,” in a network connected through peer-to-peer nodes.</Paragraph>
                </Card.Content>

                <Card.Cover resizeMode='contain'  source= {require('./images/BlockChain.jpeg')}/>


                <Card.Actions style={styles.CardActions}>

                    <Ionicons name="md-thumbs-up-outline" size={30} color="#87BCCE"/>
                     <Ionicons name="md-chatbox-outline" size={30} color="#87BCCE"  onPress={()=> navigation.navigate('Comments')}/>
                     <Ionicons name="md-share-outline" size={30} color="#87BCCE"/>
                     <Ionicons name="md-send-outline" size={30} color="#87BCCE"/>

                </Card.Actions>
              </Card>
           </List.Section>
      
           <List.Section>
              <Card>
                 <Card.Title
                    title="iStudio Technologies"
                    subtitle="Website Designer in chennai"
                    left={(props) => <Avatar.Image size={32}  {...props} source= {require('./images/Zebi.jpg')} />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                 />
                 <Card.Content>
                
                   <Paragraph>Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices.</Paragraph>
                 </Card.Content>

                <Card.Cover resizeMode='contain' source={require('./images/App.jpg')} />

                <Card.Actions style={styles.CardActions}>
                    <Ionicons name="md-thumbs-up-outline" size={30} color="#87BCCE"/>
                    <Ionicons name="md-chatbox-outline" size={30} color="#87BCCE"  onPress={()=> navigation.navigate('Comments')}/>
                    <Ionicons name="md-share-outline" size={30} color="#87BCCE"/>
                    <Ionicons name="md-send-outline" size={30} color="#87BCCE"/>
                </Card.Actions>
             </Card>
            </List.Section>

            <List.Section>
              <Card>
                 <Card.Title
                    title="Pantech eLearning "
                    subtitle="Digital eLearning and Coaching centres in Chennai"
                    left={(props) => <Avatar.Image size={32}  {...props} source= {require('./images/pantech.jpg')}/>}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                 />
                 <Card.Content>
                   <Title>30 Days Free Master Class on Electric Vehicle Design.</Title>
                   <Paragraph>The course will start with introduction section which will enable the students to understand the focus areas thatcome under the umbrella of electric vehicles.</Paragraph>
                 </Card.Content>

                 <Card.Cover resizeMode='contain' source={require('./images/EV.jpg')}/>

                <Card.Actions style={styles.CardActions}>
                    <Ionicons name="md-thumbs-up-outline" size={30} color="#87BCCE"/>
                    <Ionicons name="md-chatbox-outline" size={30} color="#87BCCE"  onPress={()=> navigation.navigate('Comments')}/>
                    <Ionicons name="md-share-outline" size={30} color="#87BCCE"/>
                    <Ionicons name="md-send-outline" size={30} color="#87BCCE"/>
                </Card.Actions>
              </Card>
           </List.Section>
      
           
        
        </ScrollView>
         
         </View>
    
    

);

export default Home;

