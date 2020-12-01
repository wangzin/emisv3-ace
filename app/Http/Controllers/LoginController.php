<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
class LoginController extends Controller
{
    //loginvalidate
    public function loginvalidate(Request $request)
    {
        Validator::make($request->all(), [
            'email' => ['required'],
            'password' => ['required'],
        ])->validate();
        
        $userId=$request->input('email');
        $user = DB::table('users')->where('email', $userId)->first();
        if($user!=""){ 
            if (Hash::check($request->input('password'), $user->password)){
                $session_data = [
                    'name'  => $user->name,
                    'email'   => $user->email,
                    'password' =>$user->password
                ];
                $request->session()->put('userdetails', $session_data);
                return redirect()->route('userdashboard');
            }
            else{ 
                $message="Your password is incorrect, pleas provide correct password";
                return view('loginpage')->with('message',$message);
            }
        }
        else{
            $message="You have provided invalid email or iuser name. pelase check and try again";
            return view('loginpage')->with('message',$message);
        }

    } 
    public function userdashboard(Request $request){
        $pagetype="guideline";
        $userdata=$request->session()->get('userdetails'); 
        return Inertia::render('user_dashboard', ['data' => $userdata]); 
    }

    public function insethome(Request $request){
        return Inertia::render('inset/insethome'); 
    }
    
}
