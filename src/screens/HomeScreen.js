import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'

import Categories from '../components/categories';
import Recipes from '../components/recipes';

import * as Actions from "../store/actions"

export default function HomeScreen() {
  const {categoriesData, meals, isloading } = useSelector((state) => state.foodReducer)
  const [activeCategory, setActiveCategory] = useState('Beef');

  useEffect(()=>{
    Actions.getCategories()
   
  },[])

  useEffect(()=>{
    Actions.getFilterdFoodByCategories(activeCategory)
  },[activeCategory])

  const handleChangeCategory = category=>{
    setActiveCategory(category);
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{height: hp(5), width: hp(5.5)}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <BellIcon size={hp(4)} color="gray" />
          </TouchableOpacity>
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7)}} className="text-neutral-600">Hello, Rakesh!</Text>
          <View>
            <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">Make your own food,</Text>
          </View>
          <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">
            stay at <Text className="text-amber-400 underline">home</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder='Search any recipe'
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <TouchableOpacity className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>

        {/* categories */}
        <View>
          { categoriesData.length>0 && <Categories categories={categoriesData} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> }
        </View>

        {/* recipes */}
        <View>
          <Recipes meals={meals} categories={categoriesData} isloading={isloading} />
        </View>
      </ScrollView>
    </View>
  )
}