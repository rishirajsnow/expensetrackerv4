/**
 *  "categories": [
        {
            "id": "food",
            "name": "Food",
            "color": "#ff0000",
            "icon": "food"
        },
        {
            "id": "transport",
            "name": "Transport",
            "color": "#00ff00",
            "icon": "transport"
        },
        {
            "id": "entertainment",
            "name": "Entertainment",
            "color": "#0000ff",
            "icon": "entertainment"
        },
        {
            "id": "shopping",
            "name": "Shopping",
            "color": "#ffff00",
            "icon": "shopping"
        },
        {
            "id": "health",
            "name": "Health",
            "color": "#00ffff",
            "icon": "health"
        },
        {
            "id": "other",
            "name": "Other",
            "color": "#ff00ff",
            "icon": "other"
        }
    ],
 */
const STATE_KEY = "categories";
class CategoryManager {
    constructor(statemanager) {
        this.categories = [];
        this.statemanager = statemanager;
    }
    //define static category defaults
    static getDefaults() {
        return [
            {
                "id": "food",
                "name": "Food",
                "color": "#ff0000",
                "icon": "food"
            },
            {
                "id": "transport",
                "name": "Transport",
                "color": "#00ff00",
                "icon": "transport"
            },
            {
                "id": "entertainment",
                "name": "Entertainment",
                "color": "#0000ff",
                "icon": "entertainment"
            },
            {
                "id": "shopping",
                "name": "Shopping",
                "color": "#ffff00",
                "icon": "shopping"
            },
            {
                "id": "health",
                "name": "Health",
                "color": "#00ffff",
                "icon": "health"
            },
            {
                "id": "other",
                "name": "Other",
                "color": "#ff00ff",
                "icon": "other"
            }
        ]
    }
    addCategory(category) {
        this.categories.push(category);
    }

    removeCategory(category) {
        this.categories = this.categories.filter(c => c !== category);
    }

    getCategories() {
        return this.categories;
    }

    getCategoryByName(name) {
        return this.categories.find(c => c.name === name);
    }

    getCategoryById(id) {
        return this.categories.find(c => c.id === id);
    }

    fetchCategories() {
        this.categories = this.statemanager.getState(STATE_KEY);
        if (!this.categories) {
            this.categories = CategoryManager.getDefaults();
            this.statemanager.setState(STATE_KEY, this.categories);
        }
    }
}

export default CategoryManager;