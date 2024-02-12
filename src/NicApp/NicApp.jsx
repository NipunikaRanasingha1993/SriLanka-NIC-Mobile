import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Card, Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import lankaNic from 'lanka-nic-2019';
import { useState } from 'react';

export default function NicApp(){

    const [nic, setNic] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [newFormat,setNewFormat] = useState("");
    const [oldFormat,setOldFormat] = useState("");

    const clickSubmit =()=>{
        const data = lankaNic.infoNic(nic);
        console.log(data);
      if(data.isValidated){
        setBirthday(data.birthday);
        setGender(data.gender);
        setNewFormat(data.newFormat);
        setOldFormat(data.oldFormat);
      }else{
        alert('invalid NIC number..!')
      }
    }

    const dataClear = ()=>{
      setNic('');
      setBirthday('');
      setGender('');
      setNewFormat('');
      setOldFormat('');
    }


    return(
        <Card>
        <TextInput label="Enter Your NIC" onChangeText={(val) => setNic(val)} />
        <Button mode="contained" onPress={()=>clickSubmit()}>Submit</Button>
        
        
    <Card.Content>
    <TextInput value={birthday} disabled label="Your Birthday"/>
    <TextInput value={gender} disabled label="Your Gender"/>
    <TextInput value={newFormat} disabled label="Your NIC New Format"/>
    <TextInput value={oldFormat} disabled label="Your NIC Old Format"/>
    </Card.Content>
    <Button mode="contained" onPress={()=>dataClear()}>Clear</Button>
  </Card>
  

    )
}