import React from 'react';

import Cell from './Cell';
import theme from '../lib/theme';

import {
	Slider,
	View,
	Text,
	StyleSheet
} from 'react-native';

class CellSlider extends React.Component {

	render() {
		return (
			<Cell
				icon={this.props.icon}
				disclosure={this.props.disclosure}
			>
				<View style={styles.container}>
					<Slider style={{ flex: 1 }} {...this.props} />
				</View>
			</Cell>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	}
});

export default CellSlider;