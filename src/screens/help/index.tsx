import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../components/header';

interface FAQ {
  question: string;
  answer: string;
}

export function Help() {
  const faqs: FAQ[] = [
    {
      question: 'Como reservo uma máquina de lavar?',
      answer: 'Acesse a aba "Máquinas disponíveis", escolha um horário e selecione a máquina.'
    },
    {
      question: 'O que acontece se eu não retirar minha roupa a tempo?',
      answer: 'Após o tempo limite, sua roupa pode ser removida por outro usuário para liberar a máquina.'
    },
    {
      question: 'Como sei quando minha roupa está pronta?',
      answer: 'Você receberá uma notificação no aplicativo assim que a lavagem terminar.'
    },
    {
      question: 'Posso cancelar uma reserva?',
      answer: 'Sim, vá até "Minhas Reservas" e cancele antes do horário agendado.'
    },
    {
      question: 'Perdi um item, o que devo fazer?',
      answer: 'Verifique na seção "Itens Perdidos" se o seu item foi reportado.'
    }
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Ajuda" 
        onBack={() => {}}
      />

      <ScrollView style={styles.content}>
        <TouchableOpacity>
          <Text style={styles.reportProblem}>
            Reportar problema
          </Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Perguntas frequentes (FAQ)
          </Text>
          {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <Text style={styles.question}>{faq.question}</Text>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Suporte ao Usuário
          </Text>
          <Text style={styles.supportText}>
            Se precisar de ajuda, entre em contato:{'\n'}
            E-mail: suporte@seudominio.com{'\n'}
            Telefone: (XX) XXXX-XXXX
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  reportProblem: {
    color: '#276672',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#276672',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  faqItem: {
    marginBottom: 8,
  },
  question: {
    color: '#276672',
    fontSize: 16,
    fontWeight: '700',
  },
  answer: {
    color: '#64748B',
    fontSize: 16,
  },
  supportText: {
    color: '#64748B',
    fontSize: 16,
  }
});