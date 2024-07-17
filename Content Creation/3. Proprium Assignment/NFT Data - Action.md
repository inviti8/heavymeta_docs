## NFT Data - Action

**Blender Nonlinear Animation Editor:**  
![nonlinear_anim_editor.png](../../_resources/nonlinear_anim_editor-1.png)
***
***Overview***
Heavymeta Actions are preset interactions that can be assigned to play a particular animation, or set of animations in order, when either interacting with an assigned mesh, or performing an assigned interaction type.
***
***NLA Tracks in Blender***
Working with NLA(Non Linear Animation) Tracks in Blender can be a bit non-intuitive. Heavymeta Action Data is assigned per NLA Track.  When working with object animation in the NLA editor, animation keys are shown in an 'Action' Track:
![action_track.png](../../_resources/action_track-1.png)
The animation in this 'Action' track must be pushed down into an NLA track by pushing the 'Push Down Action' Button:
![push_down_action_btn.png](../../_resources/push_down_action_btn-1.png)
Once pushed down into an NLA track it will look like this:
![pushed_down_action.png](../../_resources/pushed_down_action-1.png)
The Heavymeta Action Editor will be available in a tab to the right of the Blender Action Editor:
![hvym_action_editor.png](../../_resources/hvym_action_editor-1.png)
***
***Using the Heavymeta Action Editor***
The Action editor has two options for action creation:
![hvym_action_editor_main.png](../../_resources/hvym_action_editor_main-1.png)
***
***Basic Action Button:***
![basic_action_btn.png](../../_resources/basic_action_btn-1.png)
<details><summary>Details</summary> 

Pressing this button will create an 'Action Property', in the editor which should be assigned a unique name:
![basic_action_name.png](../../_resources/basic_action_name-1.png)
Upon creation a track editor for assigning animation tracks appear below:
![basic_action_track_editor.png](../../_resources/basic_action_track_editor-1.png)
Our original Blender NLA Track is already present here.  We can then create additional NLA Tracks and order them how we'd like them to play:
![action_tracks.png](../../_resources/action_tracks-1.png)
Then we choose an interaction type:
-***Click:***  Anytime the user clicks, the animation will be played.
-***Double Click:***  Anytime the user double clicks, the animation will be played.
-***Mouse Wheel:***  Anytime the user moves the mouse wheel, the animation will be played.
![action_interaction_type.png](../../_resources/action_interaction_type-1.png)
Lastly, we define how the animation set should play, and whether or not additive blending should be applied:
-***Loop:***  Animations are played in order, starting from the beggining when the last track is played.
-***One Shot:***  Animations are played in order one time only.
![action_sequencing.png](../../_resources/action_sequencing-1.png)
***

</details>

***Mesh Action Button:***
![mesh_action_btn.png](../../_resources/mesh_action_btn-1.png)


<details><summary>Details</summary> 

Largely the same as the Basic Action, the difference being that the assigned interaction applies to the assigned mesh reference.
Pressing this button will create an 'Action Property', in the editor which should be assigned a unique name:
![mesh_action_name.png](../../_resources/mesh_action_name-1.png)
Upon creation a track editor for assigning animation tracks appear below:
![mesh_action_tracks.png](../../_resources/mesh_action_tracks-1.png)
Our original Blender NLA Track is already present here.  We can then create additional NLA Tracks and order them how we'd like them to play:
![action_tracks.png](../../_resources/action_tracks-1.png)
The Mesh Action requires a mesh reference to be assigned:
![mesh_action_model_ref.png](../../_resources/mesh_action_model_ref-1.png)
Then we choose an interaction type:
-***Click:***  Anytime the user clicks, the animation will be played.
-***Double Click:***  Anytime the user double clicks, the animation will be played.
-***Mouse Wheel:***  Anytime the user moves the mouse wheel, the animation will be played.
![action_interaction_type.png](../../_resources/action_interaction_type-1.png)
Lastly, we define how the animation set should play, and whether or not additive blending should be applied:
-***Loop:***  Animations are played in order, starting from the beggining when the last track is played.
-***One Shot:***  Animations are played in order one time only.
![action_sequencing.png](../../_resources/action_sequencing-1.png)
***

</details>























