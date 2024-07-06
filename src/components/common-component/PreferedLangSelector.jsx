'use client'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function PreferedLanguageSelector() {


    return (
        <div className="p-4 bg-slate-500 -mt-2 text-black rounded-sm">
            <RadioGroup defaultValue="bangla">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bangla" id="bangla" />
                    <Label htmlFor="bangla">Bangla</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english">English</Label>
                </div>
            </RadioGroup>
        </div>
    )
    
}