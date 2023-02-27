import React, { Fragment } from "react"
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import styles from "./style"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';

export default function TrackList(){
  return(
    <Fragment>
    <View style={styles.filters}>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={()=> {}}
      >
        <Text style={styles.textButtonQuery}>10s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={()=> {}}
      >
        <Text style={styles.textButtonQuery}>5s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={()=> {}}
      >
        <Text style={styles.textButtonQuery}>3s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonQuery}
        onPress={()=> {}}
      >
        <Text style={styles.textButtonQuery}>1s</Text>
      </TouchableOpacity>
      
    </View>
    </Fragment>

  )
}
const mapStateToProps = state => ({
  todos: state.todos,
)};

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);