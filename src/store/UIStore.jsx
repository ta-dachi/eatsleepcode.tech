import { observable, action, computed } from "mobx";
import dark from "../themes/dark";
import light from "../themes/light";

class UIStore {
  @observable language = "en_US";
  @observable pendingRequestCount = 0;
  @observable theme = dark;
  @observable darkMode = true;
  @observable drawerOpen = true;
  @observable pwasOpen = true;

  @action.bound
  ToggleDarkMode() {
    this.darkMode = !this.darkMode;

    this.darkMode ? (this.theme = dark) : (this.theme = light);
  }

  @action.bound
  handleDrawerToggle() {
    this.drawerOpen = !this.drawerOpen;
  }

  @action.bound
  pwasOpenToggle() {
    this.pwasOpen = !this.pwasOpen;
  }

  @computed get appIsInSync() {
    return this.pendingRequestCount === 0;
  }
}

export default new UIStore();
