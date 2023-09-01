import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useReducer } from 'react'

import styles from './popularjobs.style'
import { SIZES, COLORS } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import usefetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = usefetch
    (
      'search', {
      query: 'React developer',
      num_pages: 1
    });

  console.log("Data:: ", data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={(item) => (
              <PopularJobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs