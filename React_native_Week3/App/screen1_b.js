{/*footer */}
      <View
        style={{
          backgroundColor: 'rgb(121, 120, 193)',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 16,
          paddingBottom: 24,
        }}>
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('./assets/homeicon.png')}
          />
          <Text style={{ color: '#fff' }}>Home</Text>
        </View>
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('./assets/exploreicon.png')}
          />
          <Text style={{ color: '#fff' }}>Explore</Text>
        </View>
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('./assets/searchicon.png')}
          />
          <Text style={{ color: '#fff' }}>Search</Text>
        </View>
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('./assets/profileicon.png')}
          />
          <Text style={{ color: '#fff' }}>Profile</Text>
        </View>
      </View>