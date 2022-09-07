import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { useUser } from '../../../lib/context/user';
import Loader from '../../components/Loader/loader';
import { CellLeaderMenuTab } from '../../components/stack/menutab'

const CellLeaderIndex = () => {
  const { fetchUser, data, token } = useUser();

    useEffect(() => {
      fetchUser('cell leader');
    }, [token])

  return (
    <>
    {
      data ? (
        <CellLeaderMenuTab/>
      ) : (
        <View className="flex-1 justify-center item-center">
          <Loader/>
        </View>
      )
      }
    </>
  )
}

export default CellLeaderIndex;