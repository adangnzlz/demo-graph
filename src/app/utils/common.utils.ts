
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

export default class CommonUtil {

    getNamesArray(list): Array<String> {
        const result = list.map(element => element.name);
        return result;
    }

    getIdsArray(list): Array<Number> {
        const result = list.map(element => element.id);
        return result;
    }

    getIdsSelected(list, model): Array<any> {
        return model.filter((item) => list.indexOf(item.id) > -1);
    }

    // Function to fill groups when an index of the object generated by the group by is empty
    fillEmptyGroup(object, listToFill) {
        listToFill.forEach(element => {
            if (!object[element.id]) {
                object[element.id] = [];
            }
        });
        return object;
    }

    mapSectors(sectors, list) {
        list.forEach(element => {
            element.sector_name = sectors.filter(x => x.id === element.sector_id)[0].name;
        });
        return list;
    }

}
