import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import SendIcon from '../icons/sendIcon';
import { BOT_INTENTS } from '../components/chat/botIntents';
import { useFocusEffect } from '@react-navigation/native';

export default function ChatScreen() {

    useFocusEffect(
        React.useCallback(() => {
            setMessages([
                { from: 'bot', text: 'Fala, Fã da FURIA! Como posso te ajudar? (Se quiser pode perguntar sobre: Próxima Partida, jogadores, qual o próximo evento, )' }
              ]);
              setInput('');
        }, []
    ));

    const [messages, setMessages] = React.useState([
        { from: 'bot', text: 'Fala, Fã da FURIA! Como posso te ajudar? (Se quiser pode perguntar sobre: Próxima Partida, jogadores, qual o próximo evento, )' },
    ]);
    const [input, setInput] = React.useState('');

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        setTimeout(() => {
            const botReply = getBotResponse(input);
            setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
        }, 500);
    }

    const getBotResponse = (userMessage) => {
        const lower = userMessage.toLowerCase();

        for (const intent of BOT_INTENTS) {
            if (intent.keywords.some(keyword => lower.includes(keyword))) {
                return intent.response;
            }
        }
        return 'Desculpe, não entendi sua pergunta. Você pode tentar perguntar sobre o próxima partida, Jogadores ou eventos';
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ padding: 20 }}>
                {messages.map((msg, index) => (
                    <Text
                        key={index}
                        style={msg.from === 'user' ? styles.msgSent : styles.msgReceived}
                    >
                        {msg.text}
                    </Text>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Digite sua mensagem..." placeholderTextColor="#666" value={input} onChangeText={setInput}/>
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <SendIcon />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b1b1b',
        padding: 20,
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#f3f0f0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    msgReceived: {
        alignSelf: 'flex-start',
        backgroundColor: '#1b1b1b',
        color: '#fff',
        padding: 8,
        borderRadius: 6,
        marginVertical: 4,
    },
    msgSent: {
        alignSelf: 'flex-end',
        backgroundColor: '#575757',
        color: '#fff',
        padding: 8,
        borderRadius: 6,
        marginVertical: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    textInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 20,
        height: 40,
        width: 40,
    },
    sendText: {
        color: '#fff',
        fontSize: 16,
    },
});
