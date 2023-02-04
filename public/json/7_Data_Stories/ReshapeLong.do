clear
import delimited using "C:\Users\lhkke\OneDrive - University of Bristol\Documents\Work\Year_3\Data_Science\project\html\json\7_Data_Stories\UKenergyProduction.xls"

rename total totalMt
rename coal coalMt
rename natural naturalMt
rename windsolarandhydro windsolarandhydroMt
rename bioenergywaste bioenergywasteMt
rename nuclear nuclearMt
rename petroleum petroleumMt

reshape long @Mt, i(date) j(type) string

export delimited using "UkenergyProduction", replace