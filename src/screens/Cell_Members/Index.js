import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { useUser } from '../../../lib/context/user';
import Loader from '../../components/Loader/loader';
import MenuTab from '../../components/stack/menutab'

const CellMemberIndex = () => {
  const { fetchUser, data, token } = useUser();

    useEffect(() => {
      fetchUser('cell member');
    }, [token])

  return (
    <>
    {
      data ? (
        <MenuTab/>
      ) : (
       <Loader/>
      )
      }
    </>
  )
}

export default CellMemberIndex