import React from 'react';
import { View, StyleSheet } from 'react-native';
import amountHook from '../hooks/amountHook';
import theme from '../theme';
import ImageIcon from './ImageIcon';
import Text from './Text';

const RepositoryItem = (item) => {
    const final = item.item;
    const stars = amountHook(final.stargazersCount);
    const forks = amountHook(final.forksCount);
    return (
        <View style={styles.background}>
            <View style={styles.flexContainerRow}>
                <ImageIcon url={final.ownerAvatarUrl}/>
                <View style={styles.testPadding}>
                <Text color='primary' fontSize='subheading'>{final.fullName}</Text>
                <Text color='textSecondary'>{final.description}</Text>
                <View style={styles.languageContainer}>
                  <Text color='white'>{final.language}</Text>
                </View>
              </View>
            </View>
            <View style={styles.flexContainerRow}>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight='bold'>{stars}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight='bold'>{forks}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight='bold'>{final.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight='bold'>{final.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flexContainerRow: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'flex-start',
        paddingTop: 10,

        
    },

    flexContainerColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10
        
    },
    languageContainer: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.blue
    },
    testPadding: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    background: {
        backgroundColor: theme.colors.white
    }
  });

export default RepositoryItem;