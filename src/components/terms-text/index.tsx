import { Text, StyleSheet, View } from 'react-native';

interface TermsTextProps {
  onPressTerms?: () => void;
}

export function TermsText({ onPressTerms }: TermsTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ao selecionar Concordar e continuar, concordo com os{' '}
        <Text 
          style={styles.link}
          onPress={onPressTerms}
        >
          Termos de Serviço
        </Text>
        {' '}do WashMe.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#020617',
  },
  link: {
    color: '#276672',
    textDecorationLine: 'underline',
  }
});