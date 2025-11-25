import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import { PanelLeft, ChevronLeft, ChevronRight, ShieldHalf } from 'lucide-react';

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <input type="text" placeholder="www.google.com" className="flex-1" />
        </div>
      </div>
    </>
  );
};
const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
